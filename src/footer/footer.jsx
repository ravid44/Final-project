import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export function ComponentFooter() {
  return (
    <Footer container className="bg-blue-200 w-[100vw] -ml-[11rem]">
      <div className="w-[100vw]">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 p-[1rem]   ">
          <div>
            <FooterBrand />
            <h1 className="text-[2rem] text-blue-400 font-extrabold">
              Cambo Tech
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 mb-[2rem]">
            <div>
              <FooterTitle title="about" />
              <FooterLinkGroup col>
                <div className="m-3 ml-14">
                  <FooterLink href="#">React Js</FooterLink>
                  <FooterLink href="#">Javascript</FooterLink>
                </div>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Follow us" />
              <FooterLinkGroup col>
                <div className="m-3 ml-16">
                  <FooterLink href="#">Github</FooterLink>
                  <FooterLink href="#">Discord</FooterLink>
                </div>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" />
              <FooterLinkGroup col>
                <div className="m-3 ml-8">
                  <FooterLink href="#">Privacy Policy</FooterLink>
                  <FooterLink href="#">Terms &amp; Conditions</FooterLink>
                </div>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />

        <div className="w-full sm:flex sm:items-center sm:justify-between mt-5">
          <FooterCopyright href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon href="#" icon={BsGithub} />
            <FooterIcon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
