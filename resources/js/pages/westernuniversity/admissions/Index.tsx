import React from 'react'
import MyLayoutWestern from '../layout/layout'
import { Link } from '@inertiajs/react'
import { MyNavbar } from '../components-wu/my-navbar'
import MyAdmissionFeature from './components/my-admission-feature'
import MyTable from './components/my-table'

const Index = () => {
  return (
    <MyLayoutWestern>
         <div className="font-now-alt-regular">
                <div className="aspect-[21/6] w-full bg-[url('/assets/demo-images/02TopBackground/11OutreachPrograms.jpg')] bg-cover bg-center bg-no-repeat lg:aspect-[21/6]">
                    <header className="flex flex-wrap items-center px-4 py-6 lg:px-16">
                        <div className="flex flex-1 items-center text-white">
                            <Link href="/" className="flex items-center gap-4 text-2xl">
                                <img src="assets/demo-images/Homepage/01_Logo_WIS.png" className="w-20" />
                                <div className="flex flex-col items-center justify-center">
                                    <p className="font-moul-regular text-2xl">សាលាវេស្ទើនអន្តរជាតិ</p>
                                    <p className="font-now-alt-bold mt-1 text-[10px] tracking-[2px]">WESTERN INTERNATIONAL SCHOOL</p>
                                </div>
                            </Link>
                        </div>

                        <div className="pointer-cursor block md:hidden">
                            <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <title>menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </div>
                        <input className="hidden" type="checkbox" id="menu-toggle" />

                        <div className="hidden w-full md:flex md:w-auto md:items-center" id="menu">
                            <MyNavbar />
                        </div>
                    </header>
                    <div className="mx-auto flex h-full w-[55%] flex-col items-center justify-center py-10 text-center">
                        <p className="font-now-alt-bold text-5xl text-white">Admission</p>
                    </div>
                </div>
         </div>
         <MyAdmissionFeature/>
         <MyTable/>
    </MyLayoutWestern>
  )
}

export default Index
