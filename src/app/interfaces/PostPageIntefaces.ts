export interface ProfileProps {
  name: string;
  email: string;
  companyInfo: string;
}
export interface InterfaceProfile {
  profile: ProfileProps;
}
export interface ModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setProfile: React.Dispatch<React.SetStateAction<ProfileProps>>;
  profile: ProfileProps;
}

export type TPost = {
  _id: string;
  title: string;
  content: string;
};

export interface InterfacePost {
  post: TPost;
}
