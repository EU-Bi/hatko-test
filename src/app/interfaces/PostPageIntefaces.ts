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
