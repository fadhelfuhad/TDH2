import { MainStackList } from "@/types";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ListRenderItem,
  Pressable,
  FlatList,
  Modal,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { favorites } from "@/assets/data/mock";
import ProductCard from "../home/ProductCard";
import { IProduct } from "@/assets/data/model";
import { StackActions, useTheme } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import ButtonWithIcon from "@/app/components/ButtonWithIcon";
import { gql, useQuery } from "@apollo/client";
import { Link } from "expo-router";
const USER_READ = gql`
  query UserRead {
    userRead {
      id
      email
      first_name
      otherId: id
      last_name
      title
      addresses {
        id
        address_line_1
        address_line_2
        city
        country
        postal_code
      }
      payment_methods {
        id
        name
      }
      store_permissions {
        relation
        store {
          id
          name
        }
      }
    }
  }
`;
export default function Profile() {
  const [modalVisible, setModalVisible] = useState(false);
  const { colors } = useTheme();

  const renderProduct: ListRenderItem<IProduct> = ({ item }) => {
    return <ProductCard product={item} />;
  };

  const { loading, error, data } = useQuery(USER_READ);

  if (loading) return <Text>"Loading..."</Text>;

  // const navigateTo = (route: string) => {
  //     (navigation as any).navigate('UserProfile', { screen: route })
  // }

  // const logout = () => {
  //     setModalVisible(false);
  //     navigation.dispatch(StackActions.popToTop());
  // }

  return (
    <ScrollView style={styles.screen}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Are you sure you want to logout?
            </Text>
            <View style={styles.buttonRow}>
              <Pressable
                style={[styles.button, styles.secondaryButton]}
                // onPress={logout}
              >
                <Text style={styles.buttonText}>Confirm Logout</Text>
              </Pressable>
              <Pressable
                style={[styles.button, { backgroundColor: colors.primary }]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.primaryButtonText}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.imageContainer}>
        {error ? (
          <Image
            style={styles.image}
            source={require("@/assets/images/adaptive-icon.png")}
          />
        ) : (
          <Image
            style={styles.image}
            source={require("@/assets/images/Profile-image.png")}
          />
        )}
      </View>
      {data && (
        <Text style={styles.username}>
          {data.userRead.first_name + " " + data.userRead.last_name}
        </Text>
      )}
      <Text style={styles.useremail}>
        {!data ? (
          <Link
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
            href={"/screens/login/"}
          >
            <Text style={styles.heading}>Login</Text>
          </Link>
        ) : (
          data.userRead.email
        )}
      </Text>
      <View style={styles.headingRow}>
        <Text style={styles.heading}>Favourites (12)</Text>
        <Entypo name="chevron-right" size={22} color="grey" />
      </View>
      <FlatList
        style={styles.favoritesList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={favorites}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
      />
      <Pressable
        style={styles.profileItem}
        // onPress={() => { navigateTo('OrderHistory') }}
      >
        <View style={styles.headingRow}>
          <Text style={styles.heading}>Order History</Text>
          <Entypo name="chevron-right" size={22} color="grey" />
        </View>
      </Pressable>
      <Pressable
        style={styles.profileItem}
        // onPress={() => { navigateTo('Addresses') }}
      >
        <View style={styles.headingRow}>
          <Text style={styles.heading}>My Addresses</Text>
          <Entypo name="chevron-right" size={22} color="grey" />
        </View>
      </Pressable>
      <Pressable style={styles.profileItem}>
        <Link style={styles.heading} href={"/screens/personalInfo/"}>
          <View style={styles.headingRow}>
            <Text style={styles.heading}>Personal Info</Text>
            <Entypo name="chevron-right" size={22} color="grey" />
          </View>
        </Link>
      </Pressable>
      <View className="p-2">
        {data && (
          <ButtonWithIcon
            icon={<AntDesign name="poweroff" size={18} color={"#F8719D"} />}
            text="Logout"
            textColor="text-error-main"
            color=" border-2 border-red-400"
            style={{ marginBottom: 50 }}
            // onPress={() => signOut()}
          />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 20,
    flex: 1,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    borderRadius: 90,
  },
  username: {
    color: "#1F1F26",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 16,
  },
  useremail: {
    color: "#1F1F26",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 15,
  },
  headingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  heading: {
    fontSize: 16,
    color: "#1F1F26",
    fontWeight: "bold",
  },
  favoritesList: {
    marginVertical: 24,
  },
  profileItem: {
    marginBottom: 24,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  button: {
    borderRadius: 6,
    padding: 10,
    marginStart: 12,
  },
  secondaryButton: {
    backgroundColor: "#1F1F26",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  buttonText: {
    fontWeight: "bold",
    color: "#fff",
  },
  primaryButtonText: {
    fontWeight: "bold",
    color: "#000",
  },
});
