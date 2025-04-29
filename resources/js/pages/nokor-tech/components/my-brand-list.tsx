import BrandLogos from './BrandLogosProps ';

const MyBrandList = () => {
  const logos = [
    { src: '/assets/nokor-tech/images/logo/brand/1.png', alt: 'Brand 1' },
    { src: '/assets/nokor-tech/images/logo/brand/2.png', alt: 'Brand 2' },
    { src: '/assets/nokor-tech/images/logo/brand/3.png', alt: 'Brand 3' },
    { src: '/assets/nokor-tech/images/logo/brand/4.png', alt: 'Brand 4' },
    { src: '/assets/nokor-tech/images/logo/brand/5.png', alt: 'Brand 5' },
    { src: '/assets/nokor-tech/images/logo/brand/6.png', alt: 'Brand 6' },
    { src: '/assets/nokor-tech/images/logo/brand/7.png', alt: 'Brand 7' },
  ];
  return (
    <div>
      <BrandLogos logos={logos}
        className='mx-8 md:mx-0 flex flex-wrap gap-y-8 md:gap-x-16 justify-evenly items-center py-16'
      />
    </div>
  )
}

export default MyBrandList
