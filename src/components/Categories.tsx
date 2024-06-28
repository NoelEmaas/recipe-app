import { Fragment } from 'react'

const iconNames = [
  'bread',
  'desert',
  'drinks',
  'healthy',
  'meat',
  'rice',
  'seafood',
  'snack',
  'soup'
];

const CategoryCard = ({ name }: { name: string }) => {
  return (
    <div className='flex flex-col gap-y-5 border px-10 py-6 rounded-xl shadow-sm'>
      <img src={`icons/${name}.png`} alt=""/>
      <p className='text-center font-medium text-gray-700'>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
    </div>
  )
}

const Categories = () => {
  return (
    <Fragment>
      <div className='grid grid-cols-9 gap-10 mb-20'>
        {
          iconNames.map((name, index) => (
            <CategoryCard key={index} name={name} />
          ))
        }
      </div>
    </Fragment>
  )
}

export default Categories
