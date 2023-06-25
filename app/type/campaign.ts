export interface campaignListType {
    id: number;
    state: string;
    title: string;
    platform: string;
    type: string;
    date: string;
}

export interface campaignType {
    brand_name: string;
    title: string;
    thumbnail: any;
    category: string;
    platform: string;
    start_date: any;
    end_date: any;
    description: string;
    mission_type: string;
    reward: number | undefined;
    additional_files: any;
}