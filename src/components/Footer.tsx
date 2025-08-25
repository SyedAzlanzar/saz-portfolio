import { Mail, MapPin } from "lucide-react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-transparent text-foreground py-20 pb-10 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center gap-2 justify-center">
            <MapPin className="text-primary-custom " />
            <span> Berlin, Germany</span>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <Mail className="text-primary-custom" />
            <a href="mailto:syedazlan.emr@gmail.com">
              syedazlan.emcr@gmail.com
            </a>
          </div>
         
        </div>
        <div className="mt-16 flex flex-col md:flex-row  gap-8 text-center items-center justify-between  font-extralight text-gray-300 ">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Syed Azlan zar. All rights
            reserved.
          </p>
          <div className="flex gap-4 items-center">
            <a
              href="https://www.linkedin.com/in/syed-azlan-zar/"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <FaLinkedin className="h-7 w-7" />
              </span>
            </a>
            <a
              href="https://github.com/SyedAzlanzar"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <FaGithubSquare className="h-7 w-7" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
