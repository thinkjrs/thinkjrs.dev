import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { BlogNewsletterForm } from '@/components/NewsletterForm'
import { PageSEO } from '@/components/SEO'
function ThinkjrsLink({ href, children }) {
  return (
    <a
      className="font-bold text-gray-700 hover:text-teal-500 dark:text-gray-200"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  )
}
export default function Things() {
  return (
    <>
      <PageSEO
        title={`Things I Make - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Stuff I Make
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Explore my projects, businesses, apps, open-source software, and featured writings.
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            <code>
              I build for the web in{' '}
              <ThinkjrsLink href="https://www.python.org">Python</ThinkjrsLink> and{' '}
              <ThinkjrsLink href="https://js.org">JavaScript</ThinkjrsLink> on{' '}
              <ThinkjrsLink href="https://github.com/thinkjrs">Github/thinkjrs</ThinkjrsLink> and{' '}
              <ThinkjrsLink href="https://gitlab.com/thinkjrs">Gitlab/thinkjrs</ThinkjrsLink>.
            </code>
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
          <div id="newsletter-form" className="py-12">
            <BlogNewsletterForm />
          </div>
        </div>
      </div>
    </>
  )
}
