import React, { Component, Fragment } from "react";
import "./home.css";
import Header from "../../components/Header";
import { PostDetails } from "../../type/PostDetails";
import HeroSection from "../../components/HeroSection/HeroSection";
import ItemCard from "../../components/ItemCard/ItemCard";


type HomeProps = {};

type HomeState = {
  postList: PostDetails[];
};

export default class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      postList: [
      ],
    };
  }

  render() {
    return (
      <Fragment>
      <Header/>
      <div className="p-0">
        <HeroSection/>
        <div className="p-6 w-full grid lg:grid-cols-4 md:grid-cols-2 gap-4">
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        </div>
        
      </div>
      </Fragment>
    );
  }
}
