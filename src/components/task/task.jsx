import axios from "axios";
import { Component } from "react";
import CustomImage from "../image/image";
import { baseURL_PROD } from "../../url/app-urls";



class FetchProducts extends Component{

    state={
        products:[],
        catergories:[]
    }



    componentDidMount(){

        this.fetchProducts()
        this.fetchCategories()

    }


    fetchProducts=async()=>{
        const {data,status}=await axios.get(`${baseURL_PROD}/products`)
        console.log(data)

        if(status===200){
            this.setState({
                products:data
            })
        }





    }


    fetchCategories=async()=>{
        const {data,status}=await axios.get(`${baseURL_PROD}/products/categories`)
        console.log(data)





        if(status===200){
            this.setState({
                catergories:[...data,"all"]
            })
        }

    }



    categorySelectedHandler=(selectedCategory)=>{


        if(selectedCategory==="all"){

            this.fetchProducts()

        }else{
            this.fetchCategoriyProducts(selectedCategory)
        }

    

    }




    fetchCategoriyProducts=async(selected)=>{
        const {data,status}=await axios.get(`${baseURL_PROD}/products/category/${selected}`)


        if(status===200){
            this.setState({
                products:data
            })
        }
    }


    render(){
        return(
            <>

            {
                this.state.catergories.length>0 && <>
                {
                    this.state.catergories.map(each=>{
                        return(
                            <>

                            <button onClick={()=>this.categorySelectedHandler(each)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  {each}
</button>

</>
                        )
                    })
                }
                
                </>
            }

            {
                this.state.products.length>0 && <>
      {
        this.state.products.map(each=>{
            return(
                <>
                <h3>{each.title}</h3>
                <h3>{each.description}</h3>
                <CustomImage source={each.image} />
                
                </>
            )
        })
      }
                </>
            }

           


            
            </>
        )
    }
}

export default FetchProducts