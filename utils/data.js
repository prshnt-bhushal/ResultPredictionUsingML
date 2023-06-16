import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Admin',
      sNum: '19070384',
      email: 'admin@admin.com',
      password: bcrypt.hashSync('12345678'),
      isAdmin: true,
    },
    {
      name: 'User',
      sNum: '19070001',
      email: 'test@gmail.com',
      password: bcrypt.hashSync('12345678'),
      isAdmin: false,
    },
  ],
  results: [
    {
      sNum: '19070384',
      semester: 'first',
      subjects: [
        {
          name: 'Math',
          grade: 'A+',
        },{
          name: 'English',
          grade: 'A+',
        },{
          name: 'Computer',
          grade: 'A+',
        },{
          name: 'BEE',
          grade: 'A+',
        },{
          name: 'Maya',
          grade: 'F',
        }
      ]
    },
  ],
};

export default data;
