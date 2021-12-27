import ListCategory from "../../Molec/FilterProduct/ListCategory"
import SelectFilter from "../../Molec/FilterProduct/SelectFilter"
import SelectSize from "../../Molec/FilterProduct/SelectSize"

const FilterProduct = () => {
    const gender = {
        name : "Gender",
        labels : ['Men','Women','Kids']
    }
    const brand = {
        name : "Brand",
        labels : ['Nike SportWear', 'Jordan','Nike By You','NikeLab']
    }
    const shoes = {
        name : 'Shoes',
        labels : ['Platforms']
    }
    const collaborator = {
        name : 'Collaborator',
        labels : ['Gyakusou','Undercover']
    }
    const icon = {
        name : 'Icons',
        labels : ['Air Force 1', 'Air Max', 'Blazer','Bruin']
    }
    const filterData = {
        name : ["Lifestyle","Jordan","Running","Basketball","American Football","Football","Traning & Gym","Skateboarding","Baseball","Golf","Tennis","Athletics","Walking"],
        size : ['35.5', '36', '36.5', '37.5', '38', '38.5', '39', '40', '40.5', '41', '42', '42.5', '43', '44', '44.5', '45', '45.5', '46', '47', '47.5', '48.5', '49.5', '50.5', '51.5', '52.5'],
        color : ['Black', 'Blue', 'Brown', 'Green', 'Grey', 'Orange', 'Pink', 'Purple', 'Red', 'White', 'Yellow']
    }
    return (
        <div className="mms-filter">
            <ListCategory data={filterData.name}/>
            <SelectFilter data={gender}/>
            <SelectSize data={filterData.size}/>
            {/* <SelectColor data={filterData.color}/> */}
            <SelectFilter data={brand}/>
            <SelectFilter data={shoes}/>
            <SelectFilter data={collaborator}/>
            <SelectFilter data={icon}/>
        </div>
    )
}
export default FilterProduct