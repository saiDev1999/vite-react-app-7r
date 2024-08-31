import React from 'react'
import TableComponent from '../table/table'
import {  recipeDataStructure } from './recipeData'

function RecipeComponent() {
  return (
    <div>

        <TableComponent rowData={recipeDataStructure()} />
    </div>
  )
}

export default RecipeComponent