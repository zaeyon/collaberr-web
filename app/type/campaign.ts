export interface campaignListType { 
    id: number;
    brand_name: string;
    title: string;
    thumbnail: any;
    category: string;
    platform: string;
    start_date: string;
    end_date: string;
    recruit_start_date: string;
    recruit_end_date: string;
    description: string;
    mission_type: string;
    reward: number;
    additional_files: any;
    is_completed: boolean;
    is_draft: boolean;
    is_recruiting: boolean;
    is_recruited: boolean;
    is_active: boolean;
    is_deleted: boolean;
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