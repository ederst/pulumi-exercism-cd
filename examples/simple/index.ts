import * as exercism_cd from "@pulumi/exercism-cd";

const page = new exercism_cd.StaticPage("page", {
    indexContent: "<html><body><p>Hello world!</p></body></html>",
});

export const bucket = page.bucket;
export const url = page.websiteUrl;
