import styles from "@/styles/Profile.module.css";
import PersonalInfo from "@/components/profile/PersonalInfo";
import History from "@/components/profile/History";
import { Modal } from "@mantine/core";
import URLAnalyticsModal from "@/components/modals/URLAnalyticsModal";
import { useRouter } from "next/router";

import { staticData } from "@/utils/staticData";
const PAGE_DATA = staticData.pages.profile;

export default function Profile() {
  const router = useRouter();

  const handleCloseModal = () => {
    router.push({
      query: {},
    });
  };

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
          <URLAnalyticsModal variant={router.query.modal} />
        </Modal>
        <PersonalInfo />
        <History />
      </main>
    </>
  );
}
