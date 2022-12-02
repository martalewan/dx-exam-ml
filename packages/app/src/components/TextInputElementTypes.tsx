export interface ITextInputElement {
  fileldPlaceholder: string | undefined;
  fieldValue: string | undefined; 
  fieldSetter: (arg0: string) => void;
}