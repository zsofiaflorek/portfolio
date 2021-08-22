import Head from "next/head";
import { Layout } from "../components/layout";
import PageTitle, { Strong } from "../components/pageTitle";
import { Card } from "../components/card";
import classNames from "classnames";
import GoogleMapReact from "google-map-react";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Zsofia Florek - Contact</title>
      </Head>
      <Layout>
        <PageTitle>
          Contact
          <Strong> Me</Strong>
        </PageTitle>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:grid-rows-2 lg:grid-cols-6 lg:grid-rows-1">
          <div className="md:col-span-2">
            <ContactCard
              icon="fas fa-map-marker-alt"
              title="My location"
              text="Budapest, Hungary"
            />
          </div>
          <a
            href="https://www.linkedin.com/in/zsofiaflorek/"
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-2"
          >
            <ContactCard
              icon="fab fa-linkedin-in"
              title="LinkedIn"
              text="linkedin.com/in/zsofiaflorek"
            />
          </a>
          <div className="md:col-span-2 md:col-start-2 lg:col-start-auto">
            <ContactCard
              icon="fas fa-envelope"
              title="Email address"
              text="zsofia.florek@gmail.com"
            />
          </div>
        </div>
        <MapCard />
      </Layout>
    </>
  );
}

function ContactCard({ icon, title, text }) {
  return (
    <Card>
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center bg-primary-light rounded-full w-16 h-16 mb-6">
          <i className={classNames("text-[1.8rem]", icon, "text-primary")} />
        </div>
        <h3 className="text-md text-black uppercase font-semibold mb-2">
          {title}
        </h3>
        <p>{text}</p>
      </div>
    </Card>
  );
}

const mapCenter = { lat: 47.497913, lng: 19.040236 };

function MapCard() {
  return (
    <Card>
      <div className="h-96">
        <GoogleMapReact
          center={mapCenter}
          defaultZoom={5}
          bootstrapURLKeys={{ key: "AIzaSyBX-fTerWDai4QcQs39u-J7J2twRPRhUaQ" }}
        >
          <Marker lat={mapCenter.lat} lng={mapCenter.lng} />
        </GoogleMapReact>
      </div>
    </Card>
  );
}

function Marker() {
  return (
    <i className="fas fa-map-marker-alt transform -translate-x-1/2 -translate-y-full text-xl text-primary" />
  );
}
