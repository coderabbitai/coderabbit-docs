import OriginalFooter from "@theme-original/Footer";
import React from "react";

// Create your custom Footer component by extending the original Footer
function CustomFooter(props) {
  // You can add your custom JSX or styles here
  return (
    <footer>
      <OriginalFooter {...props} /> {/* Include original Footer props */}
      {/* Add your custom content here */}
      <div className="items-stretch bg-black flex flex-col px-20 py-10 max-md:px-5">
        <div className="justify-between items-stretch flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="flex flex-col items-start">
            <div className="flex gap-1 pr-2 py-px items-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2b003ad3b20290b59f3b08f614c5151ce5af2538be8ff145c1aae4ecfa170f8?"
                className="aspect-[1.17] object-contain object-center w-7 fill-white overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-center text-xl font-extrabold leading-7 tracking-tighter self-stretch grow whitespace-nowrap text-customWhite">
                CodeRabbit
              </div>
            </div>
            <div className="flex items-stretch max-w-md text-xs font-medium mt-10 max-md:mt-10 font-satoshi leading-5 text-customGray">
              CodeRabbit is an innovative, AI-driven platform that transforms
              the way code reviews are done. Its automated reviews elevate the
              code quality while significantly reducing the time and effort tied
              to extensive manual code reviews.
              <br />
              <br />
              The platform offers insightful, line-by-line feedback on code
              changes, suggesting improvements and corrections that can enhance
              the efficiency and robustness of the code.
            </div>
          </div>
          <div className="items-stretch flex justify-between gap-5 self-start">
            <div className="justify-center items-stretch flex flex-col gap-3 pr-16">
              <a
                href="https://docs.coderabbit.ai/"
                className="justify-center text-white text-base font-medium whitespace-nowrap">
                Docs
              </a>
              <a
                href="https://blog.coderabbit.ai/blog"
                className="justify-center text-white text-base font-medium whitespace-nowrap mt-1">
                Blog
              </a>
              <a
                href="https://coderabbit.ai/#pricing"
                className="justify-center text-white text-base font-medium whitespace-nowrap mt-1">
                Pricing
              </a>
              <a
                href="https://coderabbit.ai/changelog"
                className="justify-center text-white text-base font-medium whitespace-nowrap mt-1">
                Changelog
              </a>
            </div>
            <div className="justify-center items-stretch flex flex-col gap-3 pl-16">
              <a
                href="https://coderabbit.ai/compliance"
                className="justify-center text-white text-base font-medium whitespace-nowrap">
                Compliance{" "}
              </a>
              <a
                href="https://calendly.com/coderabbitai/30min"
                className="justify-center text-white text-base font-medium whitespace-nowrap mt-1">
                Schedule a Demo
              </a>
              <a
                href="https://coderabbit.ai/terms-of-service"
                className="justify-center text-white text-base font-medium whitespace-nowrap mt-1">
                Terms of Service
              </a>
              <a
                href="https://coderabbit.ai/privacy-policy"
                className="justify-center text-white text-base font-medium whitespace-nowrap mt-1">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
        <div className="bg-neutral-700 shrink-0 h-px mt-6 max-md:max-w-full" />
        <div className="justify-between flex w-full gap-5 mt-7 items-start max-md:max-w-full max-md:flex-wrap">
          <div className="text-sm font-medium font-satoshi text-customWhite">
            CodeRabbit © {new Date().getFullYear()}
          </div>
          <div className="justify-end items-stretch self-stretch flex gap-4 pl-20 max-md:max-w-full max-md:flex-wrap max-md:pl-5">
            <a
              href="https://twitter.com/coderabbitai"
              target="_blank"
              rel="noopener noreferrer">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f1b48f4977dc728d0cea441017f89664834046c1ce8f3916564bb9a1538f58a?"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/coderabbitai/"
              target="_blank"
              rel="noopener noreferrer">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ef98483828bc1c5e3349eb7c8da5c661ce0e7958e4dfe0e9c67db18e2019c65?"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
            </a>
            <a
              href="https://discord.gg/GsXnASn26c"
              target="_blank"
              rel="noopener noreferrer">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/54cf490c6e905acb0ac1e2d5b9946ca1adae440948393edc7a12ec1a68b7b95c?"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function CustomFooterWrapper(props) {
  return (
    <React.Fragment>
      <CustomFooter {...props} />
    </React.Fragment>
  );
}
