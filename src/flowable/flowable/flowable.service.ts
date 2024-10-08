import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class FlowableService {
  private baseURL = 'http://localhost:8080/flowable-task/process-api'; // Adjust as necessary

  async startProcess(processDefinitionKey: string, variables: any) {
    try {
      const response = await axios.post(
        `${this.baseURL}/runtime/process-instances`,
        {
          processDefinitionKey,
          variables,
        },
        {
          auth: {
            username: 'admin',
            password: 'test',
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error(
        'Error starting process:',
        error.response ? error.response.data : error.message,
      );
      throw new Error('Failed to start process');
    }
  }

  async getTasks() {
    try {
      const response = await axios.get(`${this.baseURL}/runtime/tasks`, {
        auth: {
          username: 'admin',
          password: 'test',
        },
      });
      return response.data;
    } catch (error) {
      console.error(
        'Error fetching tasks:',
        error.response ? error.response.data : error.message,
      );
      throw new Error('Failed to fetch tasks');
    }
  }

  async completeTask(taskId: string, variables: any) {
    try {
      const response = await axios.post(
        `${this.baseURL}/runtime/tasks/${taskId}/complete`,
        { variables },
        {
          auth: {
            username: 'admin',
            password: 'test',
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error('Error completing task:', error);
      throw new Error('Failed to complete task');
    }
  }

  async deleteProcessInstance(processInstanceId: string) {
    try {
      const response = await axios.delete(
        `${this.baseURL}/runtime/process-instances/${processInstanceId}`,
        {
          auth: {
            username: 'admin',
            password: 'test',
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error(
        'Error deleting process instance:',
        error.response ? error.response.data : error.message,
      );
      throw new Error('Failed to delete process instance');
    }
  }

  private flowableServiceBaseUrl =
    'http://localhost:8080/flowable-rest/service'; // Flowable base URL

  async deployHelloWorldProcess() {
    const bpmnXML = `<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL"
             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
             xmlns:flowable="http://flowable.org/bpmn"
             targetNamespace="http://flowable.org/bpmn/examples">

    <process id="helloWorldProcess" name="Hello World Process" isExecutable="true">
        <startEvent id="startEvent" flowable:formFieldValidation="true" />
        
        <intermediateCatchEvent id="timerEvent">
            <timerEventDefinition>
                <timeDuration>PT5M</timeDuration>
            </timerEventDefinition>
        </intermediateCatchEvent>

        <serviceTask id="printHelloWorldTask" name="Print Hello World Task" flowable:type="http">
            <extensionElements>
                <flowable:field name="requestMethod">
                    <flowable:string><![CDATA[POST]]></flowable:string>
                </flowable:field>
                <flowable:field name="requestUrl">
                    <flowable:string><![CDATA[http://localhost:3000/flowable/trigger-hello]]></flowable:string>
                </flowable:field>
            </extensionElements>
        </serviceTask>
        
        <endEvent id="endEvent" />
        <sequenceFlow id="flow1" sourceRef="timerEvent" targetRef="printHelloWorldTask" />
        <sequenceFlow id="flow2" sourceRef="printHelloWorldTask" targetRef="endEvent" />
    </process>

</definitions>`;

    try {
      // Create a FormData instance
      const formData = new FormData();
      formData.append(
        'file',
        new Blob([bpmnXML], { type: 'application/xml' }),
        'helloWorldProcess.bpmn',
      );

      const response = await axios.post(
        `http://localhost:8080/flowable-task/process-api/repository/deployments`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          auth: {
            username: 'admin', // Flowable credentials
            password: 'test',
          },
        },
      );
      console.log('Process deployed successfully:', response.data);
    } catch (error) {
      console.error(
        'Error deploying process:',
        error.response ? error.response.data : error.message,
      );
      throw new Error('Failed to deploy process');
    }
  }
}
