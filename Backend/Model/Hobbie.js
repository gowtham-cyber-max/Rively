const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
  },
  password:{
    type: String,
    required:true,
  },  
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  hobbies: {
    type: [String],
    default: []
  },
  health_conditions: {
    type: [String],
    default: []
  },
  happy_factors: {
    type: [String],
    default: []
  },
  companions: {
    type: [
      {
        relation: String,  // Corrected 'relation' typo here
        name: String,
      }
    ],
    default: []
  },
  red_zone: {
    type: [String],
    default: []
  },
  green_zone: {
    type: [String],
    default: []
  },
  sad_factors: {
    type: [String],
    default: []
  },
  triggers: [
    {
      trigger_name: {
        type: String,
        required: true
      },
      triggered_by: {
        type: [String],
        default: []
      },
      advice: {
        type: [String],
        required: true
      },
      suggested_actions: {
        type: [String],
        default: []
      },
      related_hobbies: {
        type: [String],
        default: []
      },
      support_contact: {
        person_name: {
          type: String,
          required: true
        },
        contact: {
          type: String,
          required: true
        },
        relationship: {
          type: String,
          required: true
        }
      },
      emotional_support_resources: {
        type: [String],
        default: []
      }
    }
  ]
});

const HobbieModel = mongoose.model('Hobbie', UserSchema);
module.exports = HobbieModel;
