import React from 'react';
import { withRouter } from 'react-router';

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'My campaign title...',
      goal_amount: 500,
      tagline: '',

    }
  }
}
