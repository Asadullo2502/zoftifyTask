export interface Home_type {
  navigation: {
    navigate: Function
  }
}
export interface CreateForm_type {
  navigation: {
    goBack: Function
  }
}
export interface Data_type {
  title: string
  img: string,
  id: number,
  text: string,
  status: number
}
export interface Form_type {
  goBack: Function
}