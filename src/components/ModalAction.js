import RBSheet from "react-native-raw-bottom-sheet"
import ContentModalAction from "./ContentModalAction"

const ModalAction = ({modalRef, data, deleteHandler}) => {
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
            }
            }}
            height={240}>
            <ContentModalAction data={data} deleteHandler={deleteHandler} />   
    </RBSheet>
    )
}

export default ModalAction