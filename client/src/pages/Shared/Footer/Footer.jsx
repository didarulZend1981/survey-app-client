import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>


<footer className="bg-[#1da1f2] text-white py-12 px-4 font-sans tracking-wide">
      <div className="text-center">
        <h6 className="text-base">Stay connected with us:</h6>

        <ul className="flex flex-wrap justify-center gap-x-8 gap-4 my-8">
          <li>
            <a href="https://www.facebook.com/didarul1981" className="text-xl hover:text-gray-400">
              <FaFacebookF className="inline w-7 h-7" /> {/* Facebook icon */}
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/didartech/" className="text-xl hover:text-gray-400">
              <FaLinkedinIn className="inline w-7 h-7" /> {/* LinkedIn icon */}
            </a>
          </li>

          <li>
            <a href="https://github.com/didarulZend1981" className="text-xl hover:text-gray-400">
              <FaGithub className="inline w-7 h-7" />
            </a>
          </li>

          
        </ul>

        <p className="text-base">© Survey App. All rights reserved.</p>
      </div>
    </footer>


    
        
    </div>
  );
};

export default Footer;