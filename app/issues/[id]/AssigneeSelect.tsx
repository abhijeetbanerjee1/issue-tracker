"use client";

import { Select, Text } from "@radix-ui/themes";
import React from "react";

const AssigneeSelect = () => {
  return (
    <Select.Root>
      <Text> Select an assignee...</Text>
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          <Select.Item value="1">Abhijeet Banerjee</Select.Item>
        </Select.Group>
      </Select.Content>
      <Select.Separator />
    </Select.Root>
  );
};

export default AssigneeSelect;
