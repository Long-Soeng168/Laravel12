import MyAllFeatureProducts from "./components/my-all-feature-products"
import MyCategories from "./components/my-categories"
import { MyPerpageShort } from "./components/my-perpage-short"
import { MyShortButton } from "./components/my-sort-button"
import { MyShortCharacter } from "./components/my-sort-charector"
import MyLayout from "./layout/layout"

const SolutionsPage = ({ id }: {id:string}) => {
  return (
   <MyLayout>
    <div className="bg-white w-full px-4 sm:px-10 pt-10 flex gap-4 mb-20">
        <div ><MyCategories/></div>
        <div className="">
            <div className="flex justify-end gap-4">
                <MyShortButton/>
                <MyShortCharacter/>
                <MyPerpageShort/>
            </div>
            <div className="mt-4">
            <MyAllFeatureProducts id={id}/>
            </div>
        </div>
    </div>
   </MyLayout>
  )
}

export default SolutionsPage

