"use client"
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'



interface FaqTOCProps {

}

const FaqTOC = (props: FaqTOCProps) => {
    return (
        <div className="lg:mx-12">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Table of Content</h1>
            <div className="mt-4 space-y-4 lg:mt-8">
                <Link href="/faqs#general" className="block text-blue-500 dark:text-blue-400 hover:underline">General</Link>
                <Link href="/faqs#trustAndSaftey" className="block text-gray-500 dark:text-gray-300 hover:underline">Trust & Safety</Link>
                <Link href="/faqs#services" className="block text-gray-500 dark:text-gray-300 hover:underline">Services</Link>
                <Link href="/faqs#billing" className="block text-gray-500 dark:text-gray-300 hover:underline">Billing</Link>
            </div>
        </div>
    )
}


FaqTOC.displayName = "FaqTOC"


export default FaqTOC;
