import Head from "next/head";
import { Layout } from "../components/layout";
import PageTitle, { Strong } from "../components/pageTitle";
import { Card } from "../components/card";
import classNames from "classnames";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "../components/button";

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
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <MapCard />
          <ContactFormCard />
        </div>
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
      <div className="h-96"></div>
    </Card>
  );
}

function Marker() {
  return (
    <i className="fas fa-map-marker-alt transform -translate-x-1/2 -translate-y-full text-xl text-primary" />
  );
}

function ContactFormCard() {
  const [state, handleSubmit] = useForm("mnqlowjq");
  if (state.succeeded) {
    return (
      <Card>
        <p>Thank you for contacting me!</p>
      </Card>
    );
  }
  return (
    <Card>
      <form onSubmit={handleSubmit} className="h-full">
        <div>
          <div className="max-w-full border-b border-prose py-2">
            <input name="name" placeholder="Name" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="max-w-full border-b border-prose py-2">
            <input name="email" placeholder="Email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="max-w-full border-b border-prose py-2 mb-6 ">
            <textarea
              name="message"
              placeholder="Message"
              className="h-full w-full resize-y"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div
            className="g-recaptcha"
            data-sitekey="6LdROUwcAAAAAKE151opBD9uEqsXF0jfCf9MC_MQ"
          ></div>
          <Button disabled={state.submitting}>
            <i className="fas fa-paper-plane mr-2" />
            Send message
          </Button>
        </div>
      </form>
    </Card>
  );
}
