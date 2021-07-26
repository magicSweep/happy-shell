interface IPhoto {
  name: string;
  tags: { [key: string]: boolean };
  date: Date;
  _timestamp: Date;
  photoFile: File;
}

interface Tag {
  title: string;
  name: string;
}
