import React, { Component } from "react";

export const withWindowDimensions = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = { width: 0, height: 0 };
    }

    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    };

    render() {
      const { width, height } = this.state;

      const isDefault = width > 767;
      const isMobile = width < 768;
      const isTablet = width > 767 && width < 992;
      const isDesktop = width > 991;
      const isLargeDesktop = width > 1440;

      let device; // MUTATION!
      if (isMobile) {
        device = "mobile";
      } else if (isTablet) {
        device = "tablet";
      } else if (isDesktop) {
        device = "desktop";
      } else if (isLargeDesktop) {
        device = "largeDesktop";
      }

      return (
        <WrappedComponent
          {...this.props}
          windowWidth={width}
          windowHeight={height}
          isDefault={isDefault}
          isMobile={isMobile}
          isTablet={isTablet}
          isDesktop={isDesktop}
          isLargeDesktop={isLargeDesktop}
          device={device}
        />
      );
    }
  };
};
