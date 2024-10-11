import Link from "next/link"

export const DemoBadge = () => {
  return(
    <div className="fixed bottom-0 right-20 z-10">
      <Link href="https://react-saas.com">
        <div className="rounded-md bg-gray-900 px-3 py-2 font-semibold text-gray-100">
         <span className="text-gray-500">Demo of</span>
          {'SaaS Boilerplate'}
      </div>
    </Link>
  </div>
  )
}