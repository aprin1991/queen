type InformationProps = {
  save: Function;
  editItem: ContactProp;
  isEditMode: boolean;
  cancelEdit: Function;
  saveEdit: Function;
};
type CommunicationProp = {
  data: Array<ContactProp>;
  removeItem: RemoveItem;
  edit: editProp;
};
type RemoveItem = Function;
type editProp = Function;

type CartProps = {
  item: ContactProp;
  removeItem: RemoveItem;
  edit: editProp;
};
type ContactProp = {
  social_id: string;
  social_type: string;
  social_link: string;
  prevId?: string;
  id: string;
};
export type { InformationProps, CommunicationProp, CartProps, ContactProp };
