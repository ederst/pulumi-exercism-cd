// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

import * as aws from "@pulumi/aws";

export class StaticPage extends pulumi.ComponentResource {
    /** @internal */
    public static readonly __pulumiType = 'exercismcd:index:StaticPage';

    /**
     * Returns true if the given object is an instance of StaticPage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StaticPage {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StaticPage.__pulumiType;
    }

    /**
     * The bucket resource.
     */
    public /*out*/ readonly bucket!: pulumi.Output<aws.s3.Bucket>;
    /**
     * The website URL.
     */
    public /*out*/ readonly websiteUrl!: pulumi.Output<string>;

    /**
     * Create a StaticPage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StaticPageArgs, opts?: pulumi.ComponentResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.indexContent === undefined) && !opts.urn) {
                throw new Error("Missing required property 'indexContent'");
            }
            inputs["indexContent"] = args ? args.indexContent : undefined;
            inputs["bucket"] = undefined /*out*/;
            inputs["websiteUrl"] = undefined /*out*/;
        } else {
            inputs["bucket"] = undefined /*out*/;
            inputs["websiteUrl"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(StaticPage.__pulumiType, name, inputs, opts, true /*remote*/);
    }
}

/**
 * The set of arguments for constructing a StaticPage resource.
 */
export interface StaticPageArgs {
    /**
     * The HTML content for index.html.
     */
    readonly indexContent: pulumi.Input<string>;
}
