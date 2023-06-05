import styles from "@/styles/Profile.module.css";
import PersonalInfo from "@/components/profile/PersonalInfo";
import History from "@/components/profile/History";
import { Modal } from "@mantine/core";
import URLAnalyticsModal from "@/components/modals/URLAnalyticsModal";
import { useRouter } from "next/router";

import { staticData } from "@/utils/staticData";
import { useEffect } from "react";
const PAGE_DATA = staticData.pages.profile;

export default function Profile({ user, updateUser }) {
  const router = useRouter();

  const handleCloseModal = () => {
    router.push({
      query: {},
    });
  };
  useEffect(() => {
    updateUser();
  }, [router.query.modal]);

  return (
    <>
      <main className={styles.main}>
        <Modal
          size="auto"
          classNames={{
            body: styles.modal,
            content: styles.modalContent,
          }}
          opened={Object.keys(PAGE_DATA.modalAllowedRouteValues).includes(
            router.query.modal
          )}
          onClose={handleCloseModal}
          withCloseButton={false}
          centered
        >
          <URLAnalyticsModal user={user} variant={router.query.modal} />
        </Modal>
        <PersonalInfo user={user} />
        <History user={user} />
      </main>
    </>
  );
}
