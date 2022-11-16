import RBSheet from "react-native-raw-bottom-sheet"
import ContentModalAction from "./ContentModalAction"

const ModalAction = ({modalRef}) => {
    return (
    <RBSheet
            ref={modalRef}
            closeOnDragDown={true}
            closeOnPressMask={false}
            customStyles={{
            wrapper: {
            backgroundColor: "transparent"
            },
            draggableIcon: {
            backgroundColor: "#000"
            }}}>
            <ContentModalAction />   
    </RBSheet>
    )
}

export default ModalAction