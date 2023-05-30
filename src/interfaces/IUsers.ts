export interface IUserInputUpdate {
  user_name: string;
  pass_word: string | number;
  full_name: string;
  user_id: string;
}

export interface IUserInputDTO {
  user_name: string | number;
  pass_word: string | number;
}
