import Link from "next/link";
import { Form, FormInput, SubmitButton } from "../simplifiers/Form";
import Image from "next/image";
import myImage from "@/public/images/my-image.jpg";

export default function Footer() {
  return (
    <div
      className='relative h-screen font-medium leading-10 capitalize'
      id='footer'>
      <div className='grid md:grid-cols-4 pt-[10%] p-6 w-11/12 mx-auto'>
        <div className='text-lg leading-10'>
          <Link href={"/"}>
            <a className='cursor-pointer'>
              <svg
                width='80'
                height='50'
                viewBox='0 0 80 50'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='inline-block'>
                <rect width='35' height='15' fill='#000' x='20' y='10' />
                <rect
                  width='20'
                  height='20'
                  rx='100'
                  fill='#d18512'
                  y='30'
                  x='25'
                />
                <rect width='20' height='20' fill='#9310eb' y='10' x='10' />
              </svg>
              uwenayoallain
            </a>
          </Link>
          <Image
            src={myImage}
            className='rounded-full'
            alt='Image of uwenayoallain'
            draggable='false'
          />
        </div>
        <div className='h-full col-span-1 mt-2 md:text-center'>
          <p className='text-lg leading-10'>Site Map</p>
          <div>
            <Link href={"/"}>
              <a className='link'>Home</a>
            </Link>
          </div>
          <div>
            <Link href={"/about"}>
              <a className='link'>About</a>
            </Link>
          </div>
          <div>
            <Link href={"/blog"}>
              <a className='link'>Blog</a>
            </Link>
          </div>
          <div>
            <Link href={"/newsletter"}>
              <a className='link'>Newsletter</a>
            </Link>
          </div>
          <div>
            <Link href={"/uses"}>
              <a className='link'>Uses</a>
            </Link>
          </div>
          <div>
            <Link href={"/dashboard"}>
              <a className='link'>Dashboard</a>
            </Link>
          </div>
          <div>
            <Link href={"/timeline"}>
              <a className='link'>Timeline</a>
            </Link>
          </div>
          <div>
            <Link href={"/allpages"}>
              <a className='link'>All Pages</a>
            </Link>
          </div>
        </div>
        <div className='h-full col-span-1 mt-2'>
          <p className='text-lg leading-10'>Newsletter</p>
          <p className='text-sm text-gray-700 dark:text-gray-300'>
            Stay up to date with the latest news and updates
          </p>
          <Form>
            <FormInput type='text' label='Your Name' />
            <FormInput type='email' label='Your Email' />
            <SubmitButton type='submit' content='Submit' />
          </Form>
        </div>
        <div className='h-full col-span-1 pb-10 mt-2 ml-4'>
          <p className='text-lg leading-10'>Contact</p>
          <p className='text-sm text-gray-700 dark:text-gray-300'>
            Contact me through social media.
          </p>
          <a
            href='https://www.github.com/uwenayoallain'
            className='inline-flex items-center justify-center p-6 m-2 bg-gray-200 rounded-full w-max hover:bg-gray-300 dark:hover:bg-gray-700 dark:bg-gray-800'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='-2 -2 24 24'
              width='24'
              height='24'
              preserveAspectRatio='xMinYMin'>
              <path d='M18.88 1.099C18.147.366 17.265 0 16.233 0H3.746C2.714 0 1.832.366 1.099 1.099.366 1.832 0 2.714 0 3.746v12.487c0 1.032.366 1.914 1.099 2.647.733.733 1.615 1.099 2.647 1.099H6.66c.19 0 .333-.007.429-.02a.504.504 0 0 0 .286-.169c.095-.1.143-.245.143-.435l-.007-.885c-.004-.564-.006-1.01-.006-1.34l-.3.052c-.19.035-.43.05-.721.046a5.555 5.555 0 0 1-.904-.091 2.026 2.026 0 0 1-.872-.39 1.651 1.651 0 0 1-.572-.8l-.13-.3a3.25 3.25 0 0 0-.41-.663c-.186-.243-.375-.407-.566-.494l-.09-.065a.956.956 0 0 1-.17-.156.723.723 0 0 1-.117-.182c-.026-.061-.004-.111.065-.15.07-.04.195-.059.378-.059l.26.04c.173.034.388.138.643.311a2.1 2.1 0 0 1 .631.677c.2.355.44.626.722.813.282.186.566.28.852.28.286 0 .533-.022.742-.065a2.59 2.59 0 0 0 .585-.196c.078-.58.29-1.028.637-1.34a8.907 8.907 0 0 1-1.333-.234 5.314 5.314 0 0 1-1.223-.507 3.5 3.5 0 0 1-1.047-.872c-.277-.347-.505-.802-.683-1.365-.177-.564-.266-1.215-.266-1.952 0-1.049.342-1.942 1.027-2.68-.32-.788-.29-1.673.091-2.652.252-.079.625-.02 1.119.175.494.195.856.362 1.086.5.23.14.414.257.553.352a9.233 9.233 0 0 1 2.497-.338c.859 0 1.691.113 2.498.338l.494-.312a6.997 6.997 0 0 1 1.197-.572c.46-.174.81-.221 1.054-.143.39.98.424 1.864.103 2.653.685.737 1.028 1.63 1.028 2.68 0 .737-.089 1.39-.267 1.957-.177.568-.407 1.023-.689 1.366-.282.343-.633.63-1.053.865-.42.234-.828.403-1.223.507a8.9 8.9 0 0 1-1.333.235c.45.39.676 1.005.676 1.846v3.11c0 .147.021.266.065.357a.36.36 0 0 0 .208.189c.096.034.18.056.254.064.074.01.18.013.318.013h2.914c1.032 0 1.914-.366 2.647-1.099.732-.732 1.099-1.615 1.099-2.647V3.746c0-1.032-.367-1.914-1.1-2.647z'></path>
            </svg>
          </a>

          <a
            href='https://www.twitter.com'
            className='inline-flex items-center justify-center p-6 m-2 bg-gray-200 rounded-full w-max hover:bg-gray-300 dark:hover:bg-gray-700 dark:bg-gray-800'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='-2 -4 24 24'
              width='24'
              height='24'
              preserveAspectRatio='xMinYMin'
              className='icon__icon'>
              <path d='M20 1.907a8.292 8.292 0 0 1-2.356.637A4.07 4.07 0 0 0 19.448.31a8.349 8.349 0 0 1-2.607.98A4.12 4.12 0 0 0 13.846.015c-2.266 0-4.103 1.81-4.103 4.04 0 .316.036.625.106.92A11.708 11.708 0 0 1 1.393.754a3.964 3.964 0 0 0-.554 2.03c0 1.403.724 2.64 1.824 3.363A4.151 4.151 0 0 1 .805 5.64v.05c0 1.958 1.415 3.591 3.29 3.963a4.216 4.216 0 0 1-1.08.141c-.265 0-.522-.025-.773-.075a4.098 4.098 0 0 0 3.832 2.807 8.312 8.312 0 0 1-5.095 1.727c-.332 0-.658-.02-.979-.056a11.727 11.727 0 0 0 6.289 1.818c7.547 0 11.673-6.157 11.673-11.496l-.014-.523A8.126 8.126 0 0 0 20 1.907z'></path>
            </svg>
          </a>

          <a
            href='mailto:uwenayoallain@gmail.com'
            className='inline-flex items-center justify-center p-6 m-2 bg-gray-200 rounded-full w-max hover:bg-gray-300 dark:hover:bg-gray-700 dark:bg-gray-800'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              width='16'
              height='16'
              viewBox='0 0 16 16'>
              <path d='M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.313l6.709 3.933L8 8.928l1.291.717L16 5.715V5.4a2 2 0 0 0-1.059-1.765l-6-3.2zM16 6.873l-5.693 3.337L16 13.372v-6.5zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516zM0 13.373l5.693-3.163L0 6.873v6.5z' />
            </svg>
          </a>
        </div>
      </div>
      <p className='w-full text-center md:absolute md:bottom-0'>
        All right reserved - uwenayoallain &copy; {new Date().getFullYear()}
      </p>
    </div>
  );
}
