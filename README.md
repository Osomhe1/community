# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

logo color = 00BCC2
dashboard content = F5F7FA
sidebar = 303840
the badge colorand new Report button color are the same = 00BCC2

when the new report button is hovered, the bg will change to 00979C
FM button = 4AA2EE

<!-- md:grid-cols-[10fr_1fr] -->
<!-- md:grid-cols-[1fr_100px]  -->

<!-- xm:grid-cols-[2fr_1fr]  -->
<!-- xm:grid-cols-[1fr_380px] -->

<!-- w-full h-full   grid grid-cols-1 subsemi:grid-cols-[1fr_285px] subsemi:gap-4  semi:grid-cols-[1fr_330px] semi:gap-6 xmd:grid-cols-[1.5fr_350px] xmd:gap-8 xm:grid-cols-[1.5fr_1fr] xm:gap-10 xxd:gap:12 xx:gap-14" -->

const updateUnread = async (data) => {
try {
// const filterUnread = availData?.filter(el => el?.SENDER_ID === currentPickedChat?.STAFF_ID && el.STATUS === 0)

      let filterUnreadIDs = data
        ?.filter(
          (el) =>
            el?.SENDER_ID === currentPickedChat?.STAFF_ID && el.STATUS === 0
        )
        ?.map((e) => e.CHAT_ID)
        ?.join(",");

      let theChatUser = (
        allChatHistoryFilter?.length > 0 ? allChatHistoryFilter : allChatHistory
      )?.find((chatUser) => chatUser.STAFF_ID === currentPickedChat?.STAFF_ID);

      theChatUser.UNREAD_COUNT = 0
        // theChatUser.UNREAD_COUNT - filterUnreadIDs?.length ;
      // console.log(filterUnreadIDs, theChatUser);

      const latestHistory = (
        allChatHistoryFilter?.length > 0 ? allChatHistoryFilter : allChatHistory
      )?.map((el) =>
        el?.STAFF_ID === theChatUser.STAFF_ID ? theChatUser : el
      );

      if (filterUnreadIDs) {
        const res = await updateChatStatusAction(filterUnreadIDs);
        if (res) {
          // console.log(res);

          if (allChatHistoryFilter?.length > 0) {
            setAllChatHistory([...latestHistory]);
          } else {
            setAllChatHistoryFilter([...latestHistory]);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }

};
