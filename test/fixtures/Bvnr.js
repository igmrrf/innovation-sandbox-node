const faker = require('faker');

exports.reset = {
    Server: 'Cowboy',
    aes_key: faker.random.alphaNumeric(16),
    Responsecode: '00',
    password: faker.random.alphaNumeric(7),
    ivkey: faker.random.alphaNumeric(16),
};
exports.VerifySingleBVN = {
    message: 'OK',
    data: {
      ResponseCode: '00',
      BVN: '12345678901',
      FirstName: 'Uchenna',
      MiddleName: 'Chijioke',
      LastName: 'Nwanyanwu',
      DateOfBirth: '22-Oct-1970',
      PhoneNumber: '07033333333',
      RegistrationDate: '16-Nov-2014',
      EnrollmentBank: '900',
      EnrollmentBranch: 'Victoria Island',
      WatchListed: 'NO'
    }
  };

exports.VerifyMultipleBVN =     {
    message: 'OK',
    data: {
      ResponseCode: '00',
      ValidationResponses: [ 
        {
            "ResponseCode": "00",
            "BVN": "12345678901",
            "FirstName": "Uchenna",
            "MiddleName": "Innocent",
            "LastName": "Nwanyanwu",
            "DateOfBirth": "29-Oct-1995",
            "PhoneNumber": "07033333333",
            "RegistrationDate": "16-Dec-2014",
            "EnrollmentBank": "900",
            "EnrollmentBranch": "Victoria Island",
            "WatchListed": "NO"
          },
          {
            "ResponseCode": "00",
            "BVN": "12345678902",
            "FirstName": "Wale",
            "MiddleName": "Joshua",
            "LastName": "Odugbemi",
            "DateOfBirth": "29-Oct-1996",
            "PhoneNumber": "07033333334",
            "RegistrationDate": "16-Oct-2014",
            "EnrollmentBank": "900",
            "EnrollmentBranch": "No. 2 NIBSS Avenue, VI",
            "WatchListed": "YES"
          },
          {
            "ResponseCode": "00",
            "BVN": "12345678903",
            "FirstName": "Seun",
            "MiddleName": "Ogunjimi",
            "LastName": "Isaiah",
            "DateOfBirth": "29-Oct-1997",
            "PhoneNumber": "07033333336",
            "RegistrationDate": "16-Sept-2014",
            "EnrollmentBank": "900",
            "EnrollmentBranch": "Ikorodu",
            "WatchListed": "NO"
          }
       ]
    }
  };

exports.GetSingleBVN = {
    message: 'OK',
    data: {
      ResponseCode: '00',
      BVN: '12345678901',
      FirstName: 'Uchenna',
      MiddleName: 'Chijioke',
      LastName: 'Nwanyanwu',
      DateOfBirth: '22-Oct-1970',
      PhoneNumber1: '08122222222',
      RegistrationDate: '16-Nov-2014',
      EnrollmentBank: '900',
      EnrollmentBranch: 'Victoria Island',
      Email: 'uche@nibss-plc.com.ng',
      Gender: 'Male',
      PhoneNumber2: '08111111111',
      LevelOfAccount: 'Level 1 -Low Level Accounts',
      LgaOfOrigin: 'Ohaozara',
      LgaOfResidence: 'Lagos Island',
      MaritalStatus: 'Single',
      NIN: '123456',
      NameOnCard: 'Uchenna Nwanyanwu',
      Nationality: 'Nigeria',
      ResidentialAddress: 'No. 5 Lekki Road',
      StateOfOrigin: 'Ebonyi',
      StateOfResidence: 'Lagos',
      Title: 'Mr',
      WatchListed: 'YES',
      Base64Image: '12345678901234567890123456789012'
    }
  };

exports.GetMultipleBVN = {   
        message: 'OK',
        data: {
          ResponseCode: '00',
          ValidationResponses: [ 
            {
                "ResponseCode": "00",
                "ValidationResponses": [
                  {
                    "ResponseCode": "00",
                    "BVN": "12345678901",
                    "FirstName": "BUKKY",
                    "MiddleName": "__",
                    "LastName": "LALLANA",
                    "DateOfBirth": "29-JUL-1984",
                    "PhoneNumber1": "08122222222",
                    "RegistrationDate": "16-NOV-2014",
                    "EnrollmentBank": "900",
                    "EnrollmentBranch": "IKOYI",
                    "Email": "uche@nibss-plc.com.ng",
                    "Gender": "Male",
                    "PhoneNumber2": "08111111111",
                    "LevelOfAccount": "Level 1 -Low Level Accounts",
                    "LgaOfOrigin": "Ohaozara",
                    "LgaOfResidence": "Lagos Island",
                    "MaritalStatus": "Single",
                    "NIN": "123456",
                    "NameOnCard": "Uchenna Nwanyanwu",
                    "Nationality": "Nigeria",
                    "ResidentialAddress": "No. 5 Lekki Road",
                    "StateOfOrigin": "Ebonyi",
                    "StateOfResidence": "Lagos",
                    "Title": "Mr",
                    "WatchListed": "YES",
                    "Base64Image": "12345678901234567890123456789012"
                  },
                  {
                    "ResponseCode": "00",
                    "BVN": "12345678902",
                    "FirstName": "GODSWILL",
                    "MiddleName": "CHARLES",
                    "LastName": "OGUNKAMISI",
                    "DateOfBirth": "06-AUG-1948",
                    "PhoneNumber1": "08122222222",
                    "RegistrationDate": "16-NOV-2014",
                    "EnrollmentBank": "900",
                    "EnrollmentBranch": "UMUAHIA 1 BO",
                    "Email": "uche@nibss-plc.com.ng",
                    "Gender": "Male",
                    "PhoneNumber2": "08111111111",
                    "LevelOfAccount": "Level 1 -Low Level Accounts",
                    "LgaOfOrigin": "Ohaozara",
                    "LgaOfResidence": "Lagos Island",
                    "MaritalStatus": "Single",
                    "NIN": "123456",
                    "NameOnCard": "Uchenna Nwanyanwu",
                    "Nationality": "Nigeria",
                    "ResidentialAddress": "No. 5 Lekki Road",
                    "StateOfOrigin": "Ebonyi",
                    "StateOfResidence": "Lagos",
                    "Title": "Mr",
                    "WatchListed": "YES",
                    "Base64Image": "12345678901234567890123456789012"
                  },
                  {
                    "ResponseCode": "00",
                    "BVN": "12345678903",
                    "FirstName": "FABIA",
                    "MiddleName": "ODES",
                    "LastName": "ODEDEJI",
                    "DateOfBirth": "14-MAR-1984",
                    "PhoneNumber1": "08122222222",
                    "RegistrationDate": "16-NOV-2014",
                    "EnrollmentBank": "900",
                    "EnrollmentBranch": "UMUAHIA 1 BO",
                    "Email": "uche@nibss-plc.com.ng",
                    "Gender": "Male",
                    "PhoneNumber2": "08111111111",
                    "LevelOfAccount": "Level 1 -Low Level Accounts",
                    "LgaOfOrigin": "Ohaozara",
                    "LgaOfResidence": "Lagos Island",
                    "MaritalStatus": "Single",
                    "NIN": "123456",
                    "NameOnCard": "Uchenna Nwanyanwu",
                    "Nationality": "Nigeria",
                    "ResidentialAddress": "No. 5 Lekki Road",
                    "StateOfOrigin": "Ebonyi",
                    "StateOfResidence": "Lagos",
                    "Title": "Mr",
                    "WatchListed": "YES",
                    "Base64Image": "12345678901234567890123456789012"
                  }
                ]
              }
           ]
        }
};

exports.IsBVNWatchlisted = {
    message: 'OK',
    data: {
      ResponseCode: '00',
      BVN: '12345678901',
      BankCode: '900',
      Category: '1',
      WatchListed: 'YES'
    }
  };

exports.VerifySingleBVNError = {
    ResponseCode: '05',
    Message: 'Unmatched Request, Refer to documentation.',
    EXPECT: {
      header: {
        Accept: [Array],
        'Content-Type': [Array],
        OrganisationCode: 'MTExMTE=',
        Authorization: 'MTExMTE6Xm8nZTZFWEs1VCB+XmoyPQ==',
        SIGNATURE: '7fb7f59cf948185bc8353144899d6610fc45530b3f951da976f2f69492a1c32b',
        SIGNATURE_METH: 'SHA256'
      },
      body: { BVN: '12345678901' }
    }
  };


