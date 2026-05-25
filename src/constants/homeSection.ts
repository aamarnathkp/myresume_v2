const getExperienceYears = (): string => {
    const startDate = new Date("2017-07-01");
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
    return `${diffYears}+`;
};

export const homeText = {
    name: "Amarnath K P",
    greeting: "Hi, I'm",
    designation: "Web Developer",
    experience: getExperienceYears(),
    expDescriptionStart: "with",
    expDescription: "years of experience",

    socialHandle: "Find me here",
};

export const socialHandles = [
    {
        name: "facebook",
        link: "https://www.facebook.com",
    },
    {
        name: "instagram",
        link: "https://www.instagram.com/aamarnathkp",
    },
    {
        name: "twitter",
        link: "https://x.com/aamarnathkp",
    },
    {
        name: "linkedin",
        link: "https://www.linkedin.com/in/aamarnathkp/",
    },
    {
        name: "git",
        link: "https://github.com/aamarnathkp",
    },
];
