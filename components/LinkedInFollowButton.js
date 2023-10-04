import router from 'next/router'
export default function LinkedInFollowButton({ children }) {
  return (
    <button
      className="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={() =>
        router.push(
          'https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=thinkjrs'
        )
      }
    >
      {children || `Follow me on LinkedIn`}
    </button>
  )
}
