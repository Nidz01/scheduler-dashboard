import React, { Component } from "react";

import Loading from 'components/Loading';
import classnames from "classnames";

export default class Dashboard extends Component {
  state = {
    loading: true
  };

  render() {
    const dashboardClasses = classnames("dashboard");

    if (this.state.loading) {
      return <Loading />;
    }

    return <main className={dashboardClasses} />;
  }
}
