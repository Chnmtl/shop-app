import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Platform } from "react-native";

import ProductsOverviewScreen, {
  screenOptions as productsOverviewScreenOptions,
} from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen, {
  screenOptions as productDetailScreenOptions,
} from "../screens/shop/ProductDetailScreen";
import CartScreen, {
  screenOptions as cartScreenOptions,
} from "../screens/shop/CartScreen";
import OrdersScreen, {
  screenOptions as ordersScreenOptions,
} from "../screens/shop/OrdersScreen";
import UserProductsScreen, {
  screenOptions as adminOptions,
} from "../screens/user/UserProductsScreen";
import EditProductScreen, {
  screenOptions as adminEditOptions,
} from "../screens/user/EditProductScreen";

import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const ProductsNav = createNativeStackNavigator();

export const ProductsNavigator = () => {
  return (
    <ProductsNav.Navigator screenOptions={defaultNavOptions}>
      <ProductsNav.Screen
        name="ProductsOverview"            ///"All Products"
        component={ProductsOverviewScreen}
        options={productsOverviewScreenOptions}
      />
      <ProductsNav.Screen
        name="ProductDetail" //
        component={ProductDetailScreen}
        options={productDetailScreenOptions}
      />
      <ProductsNav.Screen
        name="YourCart"
        component={CartScreen}
        options={cartScreenOptions}
      />
    </ProductsNav.Navigator>
  );
};

const OrdersNav = createNativeStackNavigator();

export const OrdersNavigator = () => {
  return (
    <OrdersNav.Navigator screenOptions={defaultNavOptions}>
      <OrdersNav.Screen
        name= "Orders"      //"Your Orders"
        component={OrdersScreen}
        options={ordersScreenOptions}
      ></OrdersNav.Screen>
    </OrdersNav.Navigator>
  );
};

const AdminNav = createNativeStackNavigator();

export const AdminNavigator = () => {
  return (
    <AdminNav.Navigator screenOptions={defaultNavOptions}>
      <AdminNav.Screen
        name= "YourProducts"
        component={UserProductsScreen}
        options={adminOptions}
      ></AdminNav.Screen>
      <AdminNav.Screen
        name="EditProduct"
        component={EditProductScreen}
        options={adminEditOptions}
      ></AdminNav.Screen>
    </AdminNav.Navigator>
  );
};

const ShopDrawerNavigator = createDrawerNavigator();

export const ShopNavigator = () => {
  return (
    <ShopDrawerNavigator.Navigator
      screenOptions={{
        activeTintColor: Colors.primary,
        headerShown: false,
      }}
    >
      <ShopDrawerNavigator.Screen
        name="Products"
        component={ProductsNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
      <ShopDrawerNavigator.Screen
        name="Orders"
        component={OrdersNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-list" : "ios-list"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
      <ShopDrawerNavigator.Screen
        name="Admin"
        component={AdminNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-create" : "ios-create"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
    </ShopDrawerNavigator.Navigator>
  );
};
