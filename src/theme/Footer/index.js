import Footer from "@theme-original/Footer";

export default function FooterWrapper(props) {
    return (
        <>
            <Footer {...props} />
            <div className="w-[1440px] h-[342px] px-20 py-[50px] bg-black flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="w-[1280px] justify-between items-start inline-flex">
                    <div className="flex-col justify-start items-start gap-[42px] inline-flex">
                        <div className="w-[137px] h-[30px] justify-start items-start gap-1 inline-flex">
                            <div className="justify-center items-center gap-[2.36px] flex">
                                <div className="text-center text-white text-[18.88px] font-extrabold leading-7">
                                    <img src="/img/logo/white_coderabbit.svg" />
                                </div>
                            </div>
                        </div>
                        <div className="w-[375px] text-stone-300 text-xs font-normal">
                            CodeRabbit is an innovative, AI-driven platform that
                            transforms the way code reviews are done. Its
                            automated reviews elevate the code quality while
                            significantly reducing the time and effort tied to
                            extensive manual code reviews.
                            <br />
                            The platform offers insightful, line-by-line
                            feedback on code changes, suggesting improvements
                            and corrections that can enhance the efficiency and
                            robustness of the code.
                        </div>
                    </div>
                    <div className="justify-start items-start gap-[100px] flex">
                        <div className="w-[140px] flex-col justify-center items-start gap-1 inline-flex">
                            <a
                                href="https://blog.coderabbit.ai/docs/introduction"
                                className="self-stretch h-[37px] text-white text-[15px]"
                            >
                                Docs
                            </a>
                            <a
                                href="https://blog.coderabbit.ai/blog"
                                className="self-stretch h-[37px] text-white text-[15px] font-medium"
                            >
                                Blog
                            </a>
                            <a
                                href="https://coderabbit.ai/pricing"
                                className="self-stretch h-[37px] text-white text-[15px] font-medium"
                            >
                                Pricing
                            </a>
                            <a
                                href="#"
                                className="self-stretch h-[37px] text-white text-[15px] font-medium"
                            >
                                Changelog
                            </a>
                        </div>
                        <div className="w-[134px] flex-col justify-center items-start gap-2 inline-flex">
                            <a
                                href="YOUR_COMPLIANCE_LINK_HERE"
                                className="self-stretch h-[37px] text-white text-[15px] font-medium"
                            >
                                Compliance
                            </a>
                            <a
                                href="https://calendly.com/coderabbitai/30min"
                                className="self-stretch h-[37px] text-white text-[15px] font-medium"
                            >
                                Schedule a Demo
                            </a>
                            <a
                                href="https://coderabbit.ai/terms-and-conditions"
                                className="self-stretch h-[37px] text-white text-[15px] font-medium text-nowrap"
                            >
                                Terms & Conditions
                            </a>
                            <a
                                href="https://coderabbit.ai/privacy-policy"
                                className="self-stretch h-[37px] text-white text-[15px] font-medium"
                            >
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full justify-center items-center flex">
                    <div className="w-full border-t-2 border-y-neutral-300"></div>
                </div>
                <div className="self-stretch justify-between items-start inline-flex">
                    <footer className="justify-between flex w-full gap-5 mt-7 items-start max-md:max-w-full max-md:flex-wrap">
                        <div className="text-white text-sm font-medium">
                            CodeRabbit © 2023.
                        </div>
                        <div className="justify-end items-stretch self-stretch flex gap-4 pl-20 max-md:max-w-full max-md:flex-wrap max-md:pl-5">
                            <a
                                href="https://twitter.com/coderabbitai"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f1b48f4977dc728d0cea441017f89664834046c1ce8f3916564bb9a1538f58a?apiKey=bcdfb569bac3439288cb09416e1bbb71&"
                                    className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                                    alt="image 1"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/coderabbitai"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ef98483828bc1c5e3349eb7c8da5c661ce0e7958e4dfe0e9c67db18e2019c65?apiKey=bcdfb569bac3439288cb09416e1bbb71&"
                                    className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                                    alt="image 2"
                                />
                            </a>
                            <a
                                href="https://discord.gg/CVtemB5c"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/54cf490c6e905acb0ac1e2d5b9946ca1adae440948393edc7a12ec1a68b7b95c?apiKey=bcdfb569bac3439288cb09416e1bbb71&"
                                    className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                                    alt="image 3"
                                />
                            </a>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}
