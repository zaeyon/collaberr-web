export interface campaignListType {
    id: number;
    state: string;
    title: string;
    platform: string;
    mission_type: string;
    start_date: string;
    end_date: string;
    
}

export interface campaignType {
    id: number;
    brand_name: string;
    title: string;
    thumbnail: any;
    category: string;
    platform: string;
    start_date: any;
    end_date: any;
    recruit_start_date: any;
    recruit_end_date: any;
    description: string;
    mission_type: string;
    reward: number | undefined;
    additional_files: any;
}