export interface IIPhoto {
  name: string;
  tags: { [key: string]: boolean };
  date: Date;
  _timestamp: Date;
  photoFile: File;
}

export interface ITag {
  title: string;
  name: string;
}
