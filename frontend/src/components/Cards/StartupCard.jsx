
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <Card className="w-full max-w-sm rounded-lg border shadow-lg bg-white dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-gray-700 dark:text-gray-200">Acme Inc</CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-300">San Francisco, CA</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center space-y-4">
        <img
          alt="Company Logo"
          className="rounded-sm"
          height="300"
          src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
          style={{
            aspectRatio: "300/250",
            objectFit: "cover",
          }}
        />
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Acme Inc is a leading investment platform focused on providing innovative solutions for startups.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Button
          className="text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700"
          size="sm"
          variant="outline"
        >
          Learn More
        </Button>
        <svg
          className="h-6 w-6 text-ruby-500 hover:text-ruby-600 dark:text-ruby-400 dark:hover:text-ruby-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.91L18.18 22 12 18.18 5.82 22 8 14.18l-5-4.91 6.91-1.01L12 2z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
        </svg>
      </CardFooter>
    </Card>
  )
}

