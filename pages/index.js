import styles from "@/styles/Home.module.css";
import Hero from "@/components/home/Hero";
import { Modal } from "@mantine/core";
import AuthModal from "@/components/home/AuthModal";
import URLAddedModal from "@/components/modals/URLAddedModal";
import URLAnalyticsModal from "@/components/modals/URLAnalyticsModal";
import { useRouter } from "next/router";

import { staticData } from "@/utils/staticData";
const PAGE_DATA = staticData.pages.index;

export default function Home() {
  const router = useRouter();

  const handleCloseModal = () => {
    router.push({
      query: {},
    });
  };

  return (
    <>
      <main>
        <Modal
          size="auto"
          classNames={{
            body: styles.modal,
            content: styles.modalContent,
          }}
          opened={
            Object.keys(PAGE_DATA.modalAllowedRouteValues).includes(
              router.query.modal
            ) || false
          }
          onClose={handleCloseModal}
          withCloseButton={false}
          centered
        >
          {["register", "login"].includes(router.query.modal) ? (
            <AuthModal variant={router.query.modal} />
          ) : "urlAdded" === router.query.modal ? (
            <URLAddedModal variant={router.query.modal} />
          ) : "urlAnalytics" === router.query.modal ? (
            <URLAnalyticsModal variant={router.query.modal} />
          ) : null}
        </Modal>
        <Hero />
      </main>
    </>
  );
}
