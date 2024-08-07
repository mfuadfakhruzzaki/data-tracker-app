import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@/components/ui/button";

export default function Homescreen() {
  return (
    <SafeAreaView>
      <Text className="text-2xl">Home</Text>
      <Button title="Go to Profile" />
    </SafeAreaView>
  );
}
