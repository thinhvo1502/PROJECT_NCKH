import { TouchableOpacity, View, Text } from "react-native"

export default HomeScreen = () => {

    return (
        <View styles = {styles.container}>
            <View style = {styles.header}>
                <Text style = {styles.itemTxt}>Tên ứng dụng</Text>
            </View>
            <View style = {styles.container}>
            <TouchableOpacity style = {styles.itemBtn}>
                <Text style = {styles.itemTxt}>Bắt đầu</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.itemBtn}>
                <Text style = {styles.itemTxt}>Hướng dẫn</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = {
    container: {
        backgroundColor: 'black',
        // justifyContent: 'center',
        alignItem: 'center',
        color: 'white',
    },
    header: {
        flex: 0.1,
    },
    container: {
        flex: 0.9,
        justifyContent: 'center',
        alignItem: 'center'
    },
    itemBtn: {

    },
    itemTxt: {

    }
}